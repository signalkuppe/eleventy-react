import React, { useEffect, useState } from 'react';
import ThemeProvider from '../theme';
import theme from '../theme/theme';
import Loader from './Loader.svg';

const themeDecorator = (Story) => (
    <ThemeProvider>
        <Story />
    </ThemeProvider>
);

/**
 *
 * Adds client-side scripts to stories
 */
const scriptDecorator = (Story) => {
    const [ready, setReady] = useState(false);
    useEffect(() => {
        const script = document.querySelector('.client-script');
        const addedClass = 'lib';

        if (!script) {
            setTimeout(() => setReady(true), 500);
        } else {
            const scriptJsLibs = script.getAttribute('data-js-libs');
            const scriptCssLibs = script.getAttribute('data-css-libs');
            const scriptCode = script.innerHTML;

            /** Add component's js libs */
            if (scriptJsLibs) {
                scriptJsLibs.split(',').forEach((script) => {
                    const scriptEl = document.createElement('script');
                    scriptEl.classList.add(addedClass);
                    scriptEl.src = script;
                    document.head.appendChild(scriptEl);
                });
            }
            /** Add component's css libs */
            if (scriptCssLibs) {
                scriptCssLibs.split(',').forEach((css) => {
                    const linkEl = document.createElement('link');
                    linkEl.classList.add(addedClass);
                    linkEl.rel = 'stylesheet';
                    linkEl.href = css;
                    document.head.appendChild(linkEl);
                });
            }

            /** Add theme variables */
            const themeString = `const THEME = ${JSON.stringify(theme)}`;
            const themeScriptEl = document.createElement('script');
            themeScriptEl.innerHTML = themeString;
            themeScriptEl.classList.add(addedClass);
            document.head.appendChild(themeScriptEl);

            setTimeout(() => {
                setReady(true);
                eval(scriptCode);
            }, 1000);
        }

        return () => {
            if (script) {
                Array.from(document.querySelectorAll(addedClass)).forEach(
                    (el) => {
                        el.remove();
                    },
                );
            }
        };
    }, []);
    return (
        <div>
            {!ready && (
                <div
                    style={{
                        textAlign: 'center',
                    }}
                >
                    <Loader />
                    <div style={{ fontSize: '85%' }}>Loading story...</div>
                </div>
            )}
            <div style={{ opacity: ready ? 1 : 0 }}>
                <Story />
            </div>
        </div>
    );
};

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
};

export const decorators = [themeDecorator, scriptDecorator];
