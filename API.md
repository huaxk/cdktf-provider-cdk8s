# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CDK8sProvider <a name="CDK8sProvider" id="cdktf-provider-cdk8s.CDK8sProvider"></a>

#### Initializers <a name="Initializers" id="cdktf-provider-cdk8s.CDK8sProvider.Initializer"></a>

```typescript
import { CDK8sProvider } from 'cdktf-provider-cdk8s'

new CDK8sProvider(scope: Construct, id: string, config: CDK8sProviderConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdktf-provider-cdk8s.CDK8sProvider.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdktf-provider-cdk8s.CDK8sProvider.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-provider-cdk8s.CDK8sProvider.Initializer.parameter.config">config</a></code> | <code><a href="#cdktf-provider-cdk8s.CDK8sProviderConfig">CDK8sProviderConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdktf-provider-cdk8s.CDK8sProvider.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdktf-provider-cdk8s.CDK8sProvider.Initializer.parameter.id"></a>

- *Type:* string

---

##### `config`<sup>Required</sup> <a name="config" id="cdktf-provider-cdk8s.CDK8sProvider.Initializer.parameter.config"></a>

- *Type:* <a href="#cdktf-provider-cdk8s.CDK8sProviderConfig">CDK8sProviderConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdktf-provider-cdk8s.CDK8sProvider.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#cdktf-provider-cdk8s.CDK8sProvider.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#cdktf-provider-cdk8s.CDK8sProvider.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#cdktf-provider-cdk8s.CDK8sProvider.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#cdktf-provider-cdk8s.CDK8sProvider.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#cdktf-provider-cdk8s.CDK8sProvider.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#cdktf-provider-cdk8s.CDK8sProvider.resetAlias">resetAlias</a></code> | *No description.* |
| <code><a href="#cdktf-provider-cdk8s.CDK8sProvider.resetClientCertificate">resetClientCertificate</a></code> | *No description.* |
| <code><a href="#cdktf-provider-cdk8s.CDK8sProvider.resetClientKey">resetClientKey</a></code> | *No description.* |
| <code><a href="#cdktf-provider-cdk8s.CDK8sProvider.resetClusterCaCertificate">resetClusterCaCertificate</a></code> | *No description.* |
| <code><a href="#cdktf-provider-cdk8s.CDK8sProvider.resetConfigContext">resetConfigContext</a></code> | *No description.* |
| <code><a href="#cdktf-provider-cdk8s.CDK8sProvider.resetConfigContextAuthInfo">resetConfigContextAuthInfo</a></code> | *No description.* |
| <code><a href="#cdktf-provider-cdk8s.CDK8sProvider.resetConfigContextCluster">resetConfigContextCluster</a></code> | *No description.* |
| <code><a href="#cdktf-provider-cdk8s.CDK8sProvider.resetConfigPath">resetConfigPath</a></code> | *No description.* |
| <code><a href="#cdktf-provider-cdk8s.CDK8sProvider.resetConfigPaths">resetConfigPaths</a></code> | *No description.* |
| <code><a href="#cdktf-provider-cdk8s.CDK8sProvider.resetExec">resetExec</a></code> | *No description.* |
| <code><a href="#cdktf-provider-cdk8s.CDK8sProvider.resetExperiments">resetExperiments</a></code> | *No description.* |
| <code><a href="#cdktf-provider-cdk8s.CDK8sProvider.resetHost">resetHost</a></code> | *No description.* |
| <code><a href="#cdktf-provider-cdk8s.CDK8sProvider.resetInsecure">resetInsecure</a></code> | *No description.* |
| <code><a href="#cdktf-provider-cdk8s.CDK8sProvider.resetPassword">resetPassword</a></code> | *No description.* |
| <code><a href="#cdktf-provider-cdk8s.CDK8sProvider.resetProxyUrl">resetProxyUrl</a></code> | *No description.* |
| <code><a href="#cdktf-provider-cdk8s.CDK8sProvider.resetToken">resetToken</a></code> | *No description.* |
| <code><a href="#cdktf-provider-cdk8s.CDK8sProvider.resetUsername">resetUsername</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="cdktf-provider-cdk8s.CDK8sProvider.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="cdktf-provider-cdk8s.CDK8sProvider.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="cdktf-provider-cdk8s.CDK8sProvider.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="cdktf-provider-cdk8s.CDK8sProvider.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="cdktf-provider-cdk8s.CDK8sProvider.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="cdktf-provider-cdk8s.CDK8sProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="cdktf-provider-cdk8s.CDK8sProvider.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="cdktf-provider-cdk8s.CDK8sProvider.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="cdktf-provider-cdk8s.CDK8sProvider.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `resetAlias` <a name="resetAlias" id="cdktf-provider-cdk8s.CDK8sProvider.resetAlias"></a>

```typescript
public resetAlias(): void
```

##### `resetClientCertificate` <a name="resetClientCertificate" id="cdktf-provider-cdk8s.CDK8sProvider.resetClientCertificate"></a>

```typescript
public resetClientCertificate(): void
```

##### `resetClientKey` <a name="resetClientKey" id="cdktf-provider-cdk8s.CDK8sProvider.resetClientKey"></a>

```typescript
public resetClientKey(): void
```

##### `resetClusterCaCertificate` <a name="resetClusterCaCertificate" id="cdktf-provider-cdk8s.CDK8sProvider.resetClusterCaCertificate"></a>

```typescript
public resetClusterCaCertificate(): void
```

##### `resetConfigContext` <a name="resetConfigContext" id="cdktf-provider-cdk8s.CDK8sProvider.resetConfigContext"></a>

```typescript
public resetConfigContext(): void
```

##### `resetConfigContextAuthInfo` <a name="resetConfigContextAuthInfo" id="cdktf-provider-cdk8s.CDK8sProvider.resetConfigContextAuthInfo"></a>

```typescript
public resetConfigContextAuthInfo(): void
```

##### `resetConfigContextCluster` <a name="resetConfigContextCluster" id="cdktf-provider-cdk8s.CDK8sProvider.resetConfigContextCluster"></a>

```typescript
public resetConfigContextCluster(): void
```

##### `resetConfigPath` <a name="resetConfigPath" id="cdktf-provider-cdk8s.CDK8sProvider.resetConfigPath"></a>

```typescript
public resetConfigPath(): void
```

##### `resetConfigPaths` <a name="resetConfigPaths" id="cdktf-provider-cdk8s.CDK8sProvider.resetConfigPaths"></a>

```typescript
public resetConfigPaths(): void
```

##### `resetExec` <a name="resetExec" id="cdktf-provider-cdk8s.CDK8sProvider.resetExec"></a>

```typescript
public resetExec(): void
```

##### `resetExperiments` <a name="resetExperiments" id="cdktf-provider-cdk8s.CDK8sProvider.resetExperiments"></a>

```typescript
public resetExperiments(): void
```

##### `resetHost` <a name="resetHost" id="cdktf-provider-cdk8s.CDK8sProvider.resetHost"></a>

```typescript
public resetHost(): void
```

##### `resetInsecure` <a name="resetInsecure" id="cdktf-provider-cdk8s.CDK8sProvider.resetInsecure"></a>

```typescript
public resetInsecure(): void
```

##### `resetPassword` <a name="resetPassword" id="cdktf-provider-cdk8s.CDK8sProvider.resetPassword"></a>

```typescript
public resetPassword(): void
```

##### `resetProxyUrl` <a name="resetProxyUrl" id="cdktf-provider-cdk8s.CDK8sProvider.resetProxyUrl"></a>

```typescript
public resetProxyUrl(): void
```

##### `resetToken` <a name="resetToken" id="cdktf-provider-cdk8s.CDK8sProvider.resetToken"></a>

```typescript
public resetToken(): void
```

##### `resetUsername` <a name="resetUsername" id="cdktf-provider-cdk8s.CDK8sProvider.resetUsername"></a>

```typescript
public resetUsername(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdktf-provider-cdk8s.CDK8sProvider.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="cdktf-provider-cdk8s.CDK8sProvider.isConstruct"></a>

```typescript
import { CDK8sProvider } from 'cdktf-provider-cdk8s'

CDK8sProvider.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="cdktf-provider-cdk8s.CDK8sProvider.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdktf-provider-cdk8s.CDK8sProvider.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdktf-provider-cdk8s.CDK8sProvider.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#cdktf-provider-cdk8s.CDK8sProvider.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-provider-cdk8s.CDK8sProvider.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-provider-cdk8s.CDK8sProvider.property.metaAttributes">metaAttributes</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#cdktf-provider-cdk8s.CDK8sProvider.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-provider-cdk8s.CDK8sProvider.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#cdktf-provider-cdk8s.CDK8sProvider.property.terraformProviderSource">terraformProviderSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-provider-cdk8s.CDK8sProvider.property.alias">alias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-provider-cdk8s.CDK8sProvider.property.aliasInput">aliasInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-provider-cdk8s.CDK8sProvider.property.clientCertificateInput">clientCertificateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-provider-cdk8s.CDK8sProvider.property.clientKeyInput">clientKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-provider-cdk8s.CDK8sProvider.property.clusterCaCertificateInput">clusterCaCertificateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-provider-cdk8s.CDK8sProvider.property.configContextAuthInfoInput">configContextAuthInfoInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-provider-cdk8s.CDK8sProvider.property.configContextClusterInput">configContextClusterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-provider-cdk8s.CDK8sProvider.property.configContextInput">configContextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-provider-cdk8s.CDK8sProvider.property.configPathInput">configPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-provider-cdk8s.CDK8sProvider.property.configPathsInput">configPathsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#cdktf-provider-cdk8s.CDK8sProvider.property.execInput">execInput</a></code> | <code>@cdktf/provider-kubernetes.KubernetesProviderExec</code> | *No description.* |
| <code><a href="#cdktf-provider-cdk8s.CDK8sProvider.property.experimentsInput">experimentsInput</a></code> | <code>@cdktf/provider-kubernetes.KubernetesProviderExperiments</code> | *No description.* |
| <code><a href="#cdktf-provider-cdk8s.CDK8sProvider.property.hostInput">hostInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-provider-cdk8s.CDK8sProvider.property.insecureInput">insecureInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#cdktf-provider-cdk8s.CDK8sProvider.property.passwordInput">passwordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-provider-cdk8s.CDK8sProvider.property.proxyUrlInput">proxyUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-provider-cdk8s.CDK8sProvider.property.tokenInput">tokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-provider-cdk8s.CDK8sProvider.property.usernameInput">usernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-provider-cdk8s.CDK8sProvider.property.clientCertificate">clientCertificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-provider-cdk8s.CDK8sProvider.property.clientKey">clientKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-provider-cdk8s.CDK8sProvider.property.clusterCaCertificate">clusterCaCertificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-provider-cdk8s.CDK8sProvider.property.configContext">configContext</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-provider-cdk8s.CDK8sProvider.property.configContextAuthInfo">configContextAuthInfo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-provider-cdk8s.CDK8sProvider.property.configContextCluster">configContextCluster</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-provider-cdk8s.CDK8sProvider.property.configPath">configPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-provider-cdk8s.CDK8sProvider.property.configPaths">configPaths</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#cdktf-provider-cdk8s.CDK8sProvider.property.exec">exec</a></code> | <code>@cdktf/provider-kubernetes.KubernetesProviderExec</code> | *No description.* |
| <code><a href="#cdktf-provider-cdk8s.CDK8sProvider.property.experiments">experiments</a></code> | <code>@cdktf/provider-kubernetes.KubernetesProviderExperiments</code> | *No description.* |
| <code><a href="#cdktf-provider-cdk8s.CDK8sProvider.property.host">host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-provider-cdk8s.CDK8sProvider.property.insecure">insecure</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#cdktf-provider-cdk8s.CDK8sProvider.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-provider-cdk8s.CDK8sProvider.property.proxyUrl">proxyUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-provider-cdk8s.CDK8sProvider.property.token">token</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-provider-cdk8s.CDK8sProvider.property.username">username</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="cdktf-provider-cdk8s.CDK8sProvider.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="cdktf-provider-cdk8s.CDK8sProvider.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="cdktf-provider-cdk8s.CDK8sProvider.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="cdktf-provider-cdk8s.CDK8sProvider.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `metaAttributes`<sup>Required</sup> <a name="metaAttributes" id="cdktf-provider-cdk8s.CDK8sProvider.property.metaAttributes"></a>

```typescript
public readonly metaAttributes: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="cdktf-provider-cdk8s.CDK8sProvider.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="cdktf-provider-cdk8s.CDK8sProvider.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `terraformProviderSource`<sup>Optional</sup> <a name="terraformProviderSource" id="cdktf-provider-cdk8s.CDK8sProvider.property.terraformProviderSource"></a>

```typescript
public readonly terraformProviderSource: string;
```

- *Type:* string

---

##### `alias`<sup>Optional</sup> <a name="alias" id="cdktf-provider-cdk8s.CDK8sProvider.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* string

---

##### `aliasInput`<sup>Optional</sup> <a name="aliasInput" id="cdktf-provider-cdk8s.CDK8sProvider.property.aliasInput"></a>

```typescript
public readonly aliasInput: string;
```

- *Type:* string

---

##### `clientCertificateInput`<sup>Optional</sup> <a name="clientCertificateInput" id="cdktf-provider-cdk8s.CDK8sProvider.property.clientCertificateInput"></a>

```typescript
public readonly clientCertificateInput: string;
```

- *Type:* string

---

##### `clientKeyInput`<sup>Optional</sup> <a name="clientKeyInput" id="cdktf-provider-cdk8s.CDK8sProvider.property.clientKeyInput"></a>

```typescript
public readonly clientKeyInput: string;
```

- *Type:* string

---

##### `clusterCaCertificateInput`<sup>Optional</sup> <a name="clusterCaCertificateInput" id="cdktf-provider-cdk8s.CDK8sProvider.property.clusterCaCertificateInput"></a>

```typescript
public readonly clusterCaCertificateInput: string;
```

- *Type:* string

---

##### `configContextAuthInfoInput`<sup>Optional</sup> <a name="configContextAuthInfoInput" id="cdktf-provider-cdk8s.CDK8sProvider.property.configContextAuthInfoInput"></a>

```typescript
public readonly configContextAuthInfoInput: string;
```

- *Type:* string

---

##### `configContextClusterInput`<sup>Optional</sup> <a name="configContextClusterInput" id="cdktf-provider-cdk8s.CDK8sProvider.property.configContextClusterInput"></a>

```typescript
public readonly configContextClusterInput: string;
```

- *Type:* string

---

##### `configContextInput`<sup>Optional</sup> <a name="configContextInput" id="cdktf-provider-cdk8s.CDK8sProvider.property.configContextInput"></a>

```typescript
public readonly configContextInput: string;
```

- *Type:* string

---

##### `configPathInput`<sup>Optional</sup> <a name="configPathInput" id="cdktf-provider-cdk8s.CDK8sProvider.property.configPathInput"></a>

```typescript
public readonly configPathInput: string;
```

- *Type:* string

---

##### `configPathsInput`<sup>Optional</sup> <a name="configPathsInput" id="cdktf-provider-cdk8s.CDK8sProvider.property.configPathsInput"></a>

```typescript
public readonly configPathsInput: string[];
```

- *Type:* string[]

---

##### `execInput`<sup>Optional</sup> <a name="execInput" id="cdktf-provider-cdk8s.CDK8sProvider.property.execInput"></a>

```typescript
public readonly execInput: KubernetesProviderExec;
```

- *Type:* @cdktf/provider-kubernetes.KubernetesProviderExec

---

##### `experimentsInput`<sup>Optional</sup> <a name="experimentsInput" id="cdktf-provider-cdk8s.CDK8sProvider.property.experimentsInput"></a>

```typescript
public readonly experimentsInput: KubernetesProviderExperiments;
```

- *Type:* @cdktf/provider-kubernetes.KubernetesProviderExperiments

---

##### `hostInput`<sup>Optional</sup> <a name="hostInput" id="cdktf-provider-cdk8s.CDK8sProvider.property.hostInput"></a>

```typescript
public readonly hostInput: string;
```

- *Type:* string

---

##### `insecureInput`<sup>Optional</sup> <a name="insecureInput" id="cdktf-provider-cdk8s.CDK8sProvider.property.insecureInput"></a>

```typescript
public readonly insecureInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="cdktf-provider-cdk8s.CDK8sProvider.property.passwordInput"></a>

```typescript
public readonly passwordInput: string;
```

- *Type:* string

---

##### `proxyUrlInput`<sup>Optional</sup> <a name="proxyUrlInput" id="cdktf-provider-cdk8s.CDK8sProvider.property.proxyUrlInput"></a>

```typescript
public readonly proxyUrlInput: string;
```

- *Type:* string

---

##### `tokenInput`<sup>Optional</sup> <a name="tokenInput" id="cdktf-provider-cdk8s.CDK8sProvider.property.tokenInput"></a>

```typescript
public readonly tokenInput: string;
```

- *Type:* string

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="cdktf-provider-cdk8s.CDK8sProvider.property.usernameInput"></a>

```typescript
public readonly usernameInput: string;
```

- *Type:* string

---

##### `clientCertificate`<sup>Optional</sup> <a name="clientCertificate" id="cdktf-provider-cdk8s.CDK8sProvider.property.clientCertificate"></a>

```typescript
public readonly clientCertificate: string;
```

- *Type:* string

---

##### `clientKey`<sup>Optional</sup> <a name="clientKey" id="cdktf-provider-cdk8s.CDK8sProvider.property.clientKey"></a>

```typescript
public readonly clientKey: string;
```

- *Type:* string

---

##### `clusterCaCertificate`<sup>Optional</sup> <a name="clusterCaCertificate" id="cdktf-provider-cdk8s.CDK8sProvider.property.clusterCaCertificate"></a>

```typescript
public readonly clusterCaCertificate: string;
```

- *Type:* string

---

##### `configContext`<sup>Optional</sup> <a name="configContext" id="cdktf-provider-cdk8s.CDK8sProvider.property.configContext"></a>

```typescript
public readonly configContext: string;
```

- *Type:* string

---

##### `configContextAuthInfo`<sup>Optional</sup> <a name="configContextAuthInfo" id="cdktf-provider-cdk8s.CDK8sProvider.property.configContextAuthInfo"></a>

```typescript
public readonly configContextAuthInfo: string;
```

- *Type:* string

---

##### `configContextCluster`<sup>Optional</sup> <a name="configContextCluster" id="cdktf-provider-cdk8s.CDK8sProvider.property.configContextCluster"></a>

```typescript
public readonly configContextCluster: string;
```

- *Type:* string

---

##### `configPath`<sup>Optional</sup> <a name="configPath" id="cdktf-provider-cdk8s.CDK8sProvider.property.configPath"></a>

```typescript
public readonly configPath: string;
```

- *Type:* string

---

##### `configPaths`<sup>Optional</sup> <a name="configPaths" id="cdktf-provider-cdk8s.CDK8sProvider.property.configPaths"></a>

```typescript
public readonly configPaths: string[];
```

- *Type:* string[]

---

##### `exec`<sup>Optional</sup> <a name="exec" id="cdktf-provider-cdk8s.CDK8sProvider.property.exec"></a>

```typescript
public readonly exec: KubernetesProviderExec;
```

- *Type:* @cdktf/provider-kubernetes.KubernetesProviderExec

---

##### `experiments`<sup>Optional</sup> <a name="experiments" id="cdktf-provider-cdk8s.CDK8sProvider.property.experiments"></a>

```typescript
public readonly experiments: KubernetesProviderExperiments;
```

- *Type:* @cdktf/provider-kubernetes.KubernetesProviderExperiments

---

##### `host`<sup>Optional</sup> <a name="host" id="cdktf-provider-cdk8s.CDK8sProvider.property.host"></a>

```typescript
public readonly host: string;
```

- *Type:* string

---

##### `insecure`<sup>Optional</sup> <a name="insecure" id="cdktf-provider-cdk8s.CDK8sProvider.property.insecure"></a>

```typescript
public readonly insecure: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `password`<sup>Optional</sup> <a name="password" id="cdktf-provider-cdk8s.CDK8sProvider.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `proxyUrl`<sup>Optional</sup> <a name="proxyUrl" id="cdktf-provider-cdk8s.CDK8sProvider.property.proxyUrl"></a>

```typescript
public readonly proxyUrl: string;
```

- *Type:* string

---

##### `token`<sup>Optional</sup> <a name="token" id="cdktf-provider-cdk8s.CDK8sProvider.property.token"></a>

```typescript
public readonly token: string;
```

- *Type:* string

---

##### `username`<sup>Optional</sup> <a name="username" id="cdktf-provider-cdk8s.CDK8sProvider.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdktf-provider-cdk8s.CDK8sProvider.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="cdktf-provider-cdk8s.CDK8sProvider.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CDK8sProviderConfig <a name="CDK8sProviderConfig" id="cdktf-provider-cdk8s.CDK8sProviderConfig"></a>

#### Initializer <a name="Initializer" id="cdktf-provider-cdk8s.CDK8sProviderConfig.Initializer"></a>

```typescript
import { CDK8sProviderConfig } from 'cdktf-provider-cdk8s'

const cDK8sProviderConfig: CDK8sProviderConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdktf-provider-cdk8s.CDK8sProviderConfig.property.alias">alias</a></code> | <code>string</code> | Alias name. |
| <code><a href="#cdktf-provider-cdk8s.CDK8sProviderConfig.property.clientCertificate">clientCertificate</a></code> | <code>string</code> | PEM-encoded client certificate for TLS authentication. |
| <code><a href="#cdktf-provider-cdk8s.CDK8sProviderConfig.property.clientKey">clientKey</a></code> | <code>string</code> | PEM-encoded client certificate key for TLS authentication. |
| <code><a href="#cdktf-provider-cdk8s.CDK8sProviderConfig.property.clusterCaCertificate">clusterCaCertificate</a></code> | <code>string</code> | PEM-encoded root certificates bundle for TLS authentication. |
| <code><a href="#cdktf-provider-cdk8s.CDK8sProviderConfig.property.configContext">configContext</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes#config_context KubernetesProvider#config_context}. |
| <code><a href="#cdktf-provider-cdk8s.CDK8sProviderConfig.property.configContextAuthInfo">configContextAuthInfo</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes#config_context_auth_info KubernetesProvider#config_context_auth_info}. |
| <code><a href="#cdktf-provider-cdk8s.CDK8sProviderConfig.property.configContextCluster">configContextCluster</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes#config_context_cluster KubernetesProvider#config_context_cluster}. |
| <code><a href="#cdktf-provider-cdk8s.CDK8sProviderConfig.property.configPath">configPath</a></code> | <code>string</code> | Path to the kube config file. Can be set with KUBE_CONFIG_PATH. |
| <code><a href="#cdktf-provider-cdk8s.CDK8sProviderConfig.property.configPaths">configPaths</a></code> | <code>string[]</code> | A list of paths to kube config files. Can be set with KUBE_CONFIG_PATHS environment variable. |
| <code><a href="#cdktf-provider-cdk8s.CDK8sProviderConfig.property.exec">exec</a></code> | <code>@cdktf/provider-kubernetes.KubernetesProviderExec</code> | exec block. |
| <code><a href="#cdktf-provider-cdk8s.CDK8sProviderConfig.property.experiments">experiments</a></code> | <code>@cdktf/provider-kubernetes.KubernetesProviderExperiments</code> | experiments block. |
| <code><a href="#cdktf-provider-cdk8s.CDK8sProviderConfig.property.host">host</a></code> | <code>string</code> | The hostname (in form of URI) of Kubernetes master. |
| <code><a href="#cdktf-provider-cdk8s.CDK8sProviderConfig.property.insecure">insecure</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether server should be accessed without verifying the TLS certificate. |
| <code><a href="#cdktf-provider-cdk8s.CDK8sProviderConfig.property.password">password</a></code> | <code>string</code> | The password to use for HTTP basic authentication when accessing the Kubernetes master endpoint. |
| <code><a href="#cdktf-provider-cdk8s.CDK8sProviderConfig.property.proxyUrl">proxyUrl</a></code> | <code>string</code> | URL to the proxy to be used for all API requests. |
| <code><a href="#cdktf-provider-cdk8s.CDK8sProviderConfig.property.token">token</a></code> | <code>string</code> | Token to authenticate an service account. |
| <code><a href="#cdktf-provider-cdk8s.CDK8sProviderConfig.property.username">username</a></code> | <code>string</code> | The username to use for HTTP basic authentication when accessing the Kubernetes master endpoint. |
| <code><a href="#cdktf-provider-cdk8s.CDK8sProviderConfig.property.cdk8sApp">cdk8sApp</a></code> | <code>cdk8s.App</code> | *No description.* |

---

##### `alias`<sup>Optional</sup> <a name="alias" id="cdktf-provider-cdk8s.CDK8sProviderConfig.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* string

Alias name.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes#alias KubernetesProvider#alias}

---

##### `clientCertificate`<sup>Optional</sup> <a name="clientCertificate" id="cdktf-provider-cdk8s.CDK8sProviderConfig.property.clientCertificate"></a>

```typescript
public readonly clientCertificate: string;
```

- *Type:* string

PEM-encoded client certificate for TLS authentication.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes#client_certificate KubernetesProvider#client_certificate}

---

##### `clientKey`<sup>Optional</sup> <a name="clientKey" id="cdktf-provider-cdk8s.CDK8sProviderConfig.property.clientKey"></a>

```typescript
public readonly clientKey: string;
```

- *Type:* string

PEM-encoded client certificate key for TLS authentication.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes#client_key KubernetesProvider#client_key}

---

##### `clusterCaCertificate`<sup>Optional</sup> <a name="clusterCaCertificate" id="cdktf-provider-cdk8s.CDK8sProviderConfig.property.clusterCaCertificate"></a>

```typescript
public readonly clusterCaCertificate: string;
```

- *Type:* string

PEM-encoded root certificates bundle for TLS authentication.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes#cluster_ca_certificate KubernetesProvider#cluster_ca_certificate}

---

##### `configContext`<sup>Optional</sup> <a name="configContext" id="cdktf-provider-cdk8s.CDK8sProviderConfig.property.configContext"></a>

```typescript
public readonly configContext: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes#config_context KubernetesProvider#config_context}.

---

##### `configContextAuthInfo`<sup>Optional</sup> <a name="configContextAuthInfo" id="cdktf-provider-cdk8s.CDK8sProviderConfig.property.configContextAuthInfo"></a>

```typescript
public readonly configContextAuthInfo: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes#config_context_auth_info KubernetesProvider#config_context_auth_info}.

---

##### `configContextCluster`<sup>Optional</sup> <a name="configContextCluster" id="cdktf-provider-cdk8s.CDK8sProviderConfig.property.configContextCluster"></a>

```typescript
public readonly configContextCluster: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes#config_context_cluster KubernetesProvider#config_context_cluster}.

---

##### `configPath`<sup>Optional</sup> <a name="configPath" id="cdktf-provider-cdk8s.CDK8sProviderConfig.property.configPath"></a>

```typescript
public readonly configPath: string;
```

- *Type:* string

Path to the kube config file. Can be set with KUBE_CONFIG_PATH.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes#config_path KubernetesProvider#config_path}

---

##### `configPaths`<sup>Optional</sup> <a name="configPaths" id="cdktf-provider-cdk8s.CDK8sProviderConfig.property.configPaths"></a>

```typescript
public readonly configPaths: string[];
```

- *Type:* string[]

A list of paths to kube config files. Can be set with KUBE_CONFIG_PATHS environment variable.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes#config_paths KubernetesProvider#config_paths}

---

##### `exec`<sup>Optional</sup> <a name="exec" id="cdktf-provider-cdk8s.CDK8sProviderConfig.property.exec"></a>

```typescript
public readonly exec: KubernetesProviderExec;
```

- *Type:* @cdktf/provider-kubernetes.KubernetesProviderExec

exec block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes#exec KubernetesProvider#exec}

---

##### `experiments`<sup>Optional</sup> <a name="experiments" id="cdktf-provider-cdk8s.CDK8sProviderConfig.property.experiments"></a>

```typescript
public readonly experiments: KubernetesProviderExperiments;
```

- *Type:* @cdktf/provider-kubernetes.KubernetesProviderExperiments

experiments block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes#experiments KubernetesProvider#experiments}

---

##### `host`<sup>Optional</sup> <a name="host" id="cdktf-provider-cdk8s.CDK8sProviderConfig.property.host"></a>

```typescript
public readonly host: string;
```

- *Type:* string

The hostname (in form of URI) of Kubernetes master.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes#host KubernetesProvider#host}

---

##### `insecure`<sup>Optional</sup> <a name="insecure" id="cdktf-provider-cdk8s.CDK8sProviderConfig.property.insecure"></a>

```typescript
public readonly insecure: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether server should be accessed without verifying the TLS certificate.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes#insecure KubernetesProvider#insecure}

---

##### `password`<sup>Optional</sup> <a name="password" id="cdktf-provider-cdk8s.CDK8sProviderConfig.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

The password to use for HTTP basic authentication when accessing the Kubernetes master endpoint.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes#password KubernetesProvider#password}

---

##### `proxyUrl`<sup>Optional</sup> <a name="proxyUrl" id="cdktf-provider-cdk8s.CDK8sProviderConfig.property.proxyUrl"></a>

```typescript
public readonly proxyUrl: string;
```

- *Type:* string

URL to the proxy to be used for all API requests.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes#proxy_url KubernetesProvider#proxy_url}

---

##### `token`<sup>Optional</sup> <a name="token" id="cdktf-provider-cdk8s.CDK8sProviderConfig.property.token"></a>

```typescript
public readonly token: string;
```

- *Type:* string

Token to authenticate an service account.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes#token KubernetesProvider#token}

---

##### `username`<sup>Optional</sup> <a name="username" id="cdktf-provider-cdk8s.CDK8sProviderConfig.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

The username to use for HTTP basic authentication when accessing the Kubernetes master endpoint.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes#username KubernetesProvider#username}

---

##### `cdk8sApp`<sup>Required</sup> <a name="cdk8sApp" id="cdktf-provider-cdk8s.CDK8sProviderConfig.property.cdk8sApp"></a>

```typescript
public readonly cdk8sApp: App;
```

- *Type:* cdk8s.App

---



