module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  // 다른 ESLint 설정을 확장해서 사용할 때 사용
  // 실제 프로젝트에서는 기본 설정보다 airbnb이나 prettier의 설정을 많이 확장해 사용
  extends: ["eslint:recommended", "plugin:react/recommended"],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react"],

  root: true,
  plugins: ["import", "react"],
  // extends: 기업들이 공개해놓은 설정을 그대로 가져와 기반 설정으로 활용
  extends: ["airbnb", "plugin:import/recommended", "plugin:react/recommended"],
  // rules: 본인의 프로젝트에서 자체적으로 덮어쓰고 싶은 규칙들을 정의할 때 사용
  // rules 옵션으로 명시된 규칙은 extends 옵션을 통해서 가져온 규칙보다 우선 시 함.
  rules: {
    "no-console": "error",
    "import/prefer-default-export": "off",
  },
  //브라우저 환경에서 전역에서 접근이 가능한 windows 객체와 같이 각 확경마다 전역 변수를 통해 접근이 가능한 고유 객체 존재
  //이러한 객체들은 ESLint에 등록을 해줘야함
  //(ESLint가 못 잡아내서 오류 발생)
  env: {
    browser: true,
    node: true,
  },
  //parser와 paerserOptions 옵션
  // ESLint는 순수한 JS만 이해 가능
  // JSX나 타입스크립트등 확장 문법이나 최신 문법은 이해 x
  // 그에 상응하는 parser를 사용하도록 설정

  //(1). 타입스크립트와 JSX를 사용해 작성된 코드를 lint 하도록 설정
  parser: "@typescript-eslint/parser",
  parserOptions: {
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
  },

  //(2). Babel parser로 사용하도록 설정
  // "parser": "@babel/eslint-parser"

  //settings: 추가적인 설정
  //ex) react plugin이 프로젝트에 설치된 react의 버전을 자동으로 탐지하도록 설정
  //(기본 설정은 react 최신 버전을 기준으로 lint)
  settings: {
    react: {
      version: detect,
    },
  },

  //ignorePatterns 옵션, .eslintingnore 파일
  // 기본적으로 node_modules 폴더나 .로 시작하는 파일 무시
  // 그 밖에 다른 파일 무시 -> 설정 파일의 ignorePatterns 옵션 사용
  ignorePatterns: ["build", "dist", "public"],

  //.gitignore와 비슷한 .eslintignore 파일 생성해도 됨
  //이미 .gitignore에 있는 경로를 무시하고 싶다 -> $eslint --ignore-path .gitignore .

  //overrides: 일부 파일에만 살짝 다른 설정을 적용
  //ex) js파일은 기본 설정, ts파일은 overrides에 명시
  overrides: [
    {
      files: "**/*.+(ts|txx)",
      parsesr: "@typescript-eslint/parser",
      plugins: ["@typescript-eslint"],
      extends: ["plugin:@typescript-exlint/recommended"],
    },
    // 프로젝트 내에 테스트 파일에만 추가적으로 Jest 플러그인과 Testing Library 플러그인에서 추천하는 규칙을 활성화하고 싶다
    {
      files: ["**/__tests__/**/*", "**/*.{spec,test}.*"],
      env: {
        "jest/globals": true,
      },
      plugins: ["jest", "jest-dom", "testing-library"],
      extends: [
        "plugin:jest/recommended",
        "plugin:jest-dom/recommended",
        "plugin:testing-library/react",
      ],
    },
  ],
};

// 샘플 설정 파일 (템플릿으로 사용)
// https://www.daleseo.com/eslint-config/
