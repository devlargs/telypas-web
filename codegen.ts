import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: '../telypas-api/src/schema.gql',
  documents: ['src/**/*.{ts,tsx}', '!src/graphql/generated/**'],
  generates: {
    './src/graphql/generated/': {
      preset: 'client',
      presetConfig: {
        fragmentMasking: false,
      },
      config: {
        useTypeImports: true,
        scalars: { ID: 'string' },
      },
    },
  },
  ignoreNoDocuments: true,
};

export default config;
