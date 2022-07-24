const functions = {
    parseJSFile: (targetJSPath) => {
        const  

    }
}

const plugin = [
     (hook, vm) => {
      hook.init( () => {
        // Called when the script starts running, only trigger once, no arguments,
      });

      hook.beforeEach( (content) => {
        // Invoked each time before parsing the Markdown file.
        // ...
        return content;
      });

      hook.afterEach( (html, next) => {
        // Invoked each time after the Markdown file is parsed.
        // beforeEach and afterEach support asynchronous。
        // ...
        // call `next(html) =>` when task is done.
        next(html);
      });

      hook.doneEach( () => {
        // Invoked each time after the data is fully loaded, no arguments,
        // ...
      });

      hook.mounted( () => {
        // Called after initial completion. Only trigger once, no arguments.
      });

      hook.ready(() => {
        // Called after initial completion, no arguments.
      });
    }
  ];