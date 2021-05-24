/**
 * Main Module, this one is a sample main module to get you started
 *
 * @category MODULES
 * @module MainModule
 *
 * @example <caption>In browser, use libs/js file to load using "script" tag</caption>
 * <script src="./package.bundled.js"></script>
 * <script>
 * 		console.log(BabelWebpack.MainModule())
 * </script>
 */

import './styles.scss';

const MainModule = () => {
  return {
    name: 'MyModule',
    purpose:
      'Get you started developing npm modules that works in server as well as browser',
  };
};

export { MainModule };
