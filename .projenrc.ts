import { cdktf, javascript } from 'projen';
const project = new cdktf.ConstructLibraryCdktf({
  author: 'huaxk',
  authorAddress: 'huaxk@163.com',
  cdktfVersion: '^0.8.3',
  defaultReleaseBranch: 'main',
  name: 'cdktf-provider-cdk8s',
  packageManager: javascript.NodePackageManager.PNPM,
  projenrcTs: true,
  repositoryUrl: 'https://github.com/huaxk/cdktf-provider-cdk8s.git',

  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
});
project.synth();