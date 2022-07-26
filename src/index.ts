import {
  KubernetesProvider,
  KubernetesProviderConfig,
  Manifest,
} from '@cdktf/provider-kubernetes';
import { App } from 'cdk8s';
import { Aspects } from 'cdktf';
import { Construct, IConstruct } from 'constructs';
import * as yaml from 'yaml';

export interface CDK8sProviderConfig extends KubernetesProviderConfig {
  readonly cdk8sApp: App;
}

export class CDK8sProvider extends KubernetesProvider {
  constructor(scope: Construct, id: string, config: CDK8sProviderConfig) {
    super(scope, id, config);

    Aspects.of(scope).add({
      visit: (node: IConstruct) => {
        // console.log(`Construct node id: ${node.node.id}`);
        if (node !== this) return;

        const yamlmanifests = yaml.parseAllDocuments(
          config.cdk8sApp.synthYaml(),
        );

        yamlmanifests.forEach((yamlManifest) => {
          const jsonManifest = yamlManifest.toJSON();
          if (!jsonManifest) return;
          const type = `${jsonManifest.apiVersion}-${jsonManifest.kind}`;
          const namespace = jsonManifest.metadata.name || 'default';
          const uniqueId = `${
            jsonManifest.metadata.name || jsonManifest.metadata.generatename
          }-${namespace}`;
          const manifest = wrapLeafStringKeys(jsonManifest);

          new Manifest(this, `${id}-${type}-${uniqueId}`, { manifest });
        });
      },
    });
  }
}

function wrapLeafStringKeys(object: any): any {
  // console.log('wrapLeafStringKeys', object);
  if (typeof object === 'string') {
    // console.log(object, object.replace(/\n/g, '\\n').replace(/\${/g, '$$${'));
    return object
      .replace(/\n/g, '\\n') // escape newlines
      .replace(/\${/g, '$$${'); // escape ${ to $${;
  }
  const ret = Object.entries(object).reduce((acc, [key, value]) => {
    if (typeof value === 'string') {
      return {
        ...acc,
        [key]: wrapLeafStringKeys(value),
      };
    }
    if (typeof value === 'object') {
      if (Array.isArray(value)) {
        return {
          ...acc,
          [key]: value.map(wrapLeafStringKeys),
        };
      } else {
        return {
          ...acc,
          [key]: wrapLeafStringKeys(value),
        };
      }
    }
    return { ...acc, [key]: value };
  }, {} as Record<string, any>);
  // console.log('ret', ret);
  return ret;
}
