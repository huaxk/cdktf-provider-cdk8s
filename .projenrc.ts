import { cdktf, javascript } from 'projen';
const project = new cdktf.ConstructLibraryCdktf({
  author: 'huaxk',
  authorAddress: 'huaxk@163.com',
  cdktfVersion: '^0.9.0',
  constructsVersion: '^10.0.25',
  defaultReleaseBranch: 'main',
  name: 'cdktf-provider-cdk8s',
  packageManager: javascript.NodePackageManager.PNPM,
  projenrcTs: true,
  repositoryUrl: 'https://github.com/huaxk/cdktf-provider-cdk8s.git',

  deps: ['yaml@1.10.2'],
  peerDeps: ['cdk8s@>=2.1.6', '@cdktf/provider-kubernetes@>=0.6.0'],
  devDeps: ['cdk8s-cli'],
  description:
    'A compatability layer for using cdk8s constructs within Terraform CDK.',
  license: 'MIT',
  eslintOptions: {
    dirs: ['src'],
    ignorePatterns: ['**/node_modules/**', '**/test/imports/**'],
  },
  jestOptions: {
    jestConfig: {
      coveragePathIgnorePatterns: ['test/imports'],
    },
  },
});

const importTask = project.addTask('import', {
  condition: '[ ! -f "test/imports/k8s.ts" ]',
  exec: 'cd ./test && cdk8s import k8s --language typescript',
});
project.testTask.prependSpawn(importTask);

project.synth();
