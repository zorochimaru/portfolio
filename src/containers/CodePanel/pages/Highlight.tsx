import beautify from 'js-beautify';
import { Highlight, themes } from 'prism-react-renderer';
import React, { FC } from 'react';
import { Method } from '../../../enums';
import { TS_CODE } from '../typescript-code';
interface SenderProps {
  dispatch: (action: { type: string; payload: Method }) => void;
}

const code = beautify(TS_CODE);

const getClassMethods = (code: string): string[] => {
  const methodRegex = /^\s*(?:public|private|protected)?\s+(\w+)\s*\(/gm;
  const methods: string[] = [];
  let match;

  while ((match = methodRegex.exec(code)) !== null) {
    methods.push(match[1]);
  }
  return methods;
};

const classMethods = getClassMethods(code);

export const HighlightPage: FC<SenderProps> = ({ dispatch }) => {
  const runMethod: React.MouseEventHandler<HTMLSpanElement> = (item) => {
    if (item.currentTarget.classList.contains('method')) {
      dispatch({
        type: 'RUN_METHOD',
        payload: (item.currentTarget.textContent as Method) || Method.introduce,
      });
    }
  };

  return (
    <Highlight theme={themes.vsDark} code={code} language="ts">
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={`${className} overflow-y-auto scrollbar`} style={style}>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line })}>
              <span style={{ marginRight: '16px', userSelect: 'none' }}>{i + 1}</span>
              {line.map((token, key) => {
                const tokenProps = getTokenProps({ token });

                if (classMethods.includes(token.content)) {
                  return <span key={key} {...tokenProps} className="method" onClick={runMethod} />;
                }

                return <span key={key} {...tokenProps} />;
              })}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
};
