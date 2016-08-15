export class Editor {
  constructor(code = '') {
    this.editor = window.ace.edit("editor");
    this.editor.setTheme("ace/theme/twilight");
    this.editor.getSession().setMode("ace/mode/javascript");
    this.editor.$blockScrolling = 'Infinity';
    this.editor.getSession().setUseWrapMode(true);
    this.editor.getSession().setUseSoftTabs(true);
    this.editor.getSession().setTabSize(2);
    this.setCode(code);
  }

  getCode() {
    return this.editor.getSession().getValue();
  }

  setCode(code) {
    this.editor.getSession().setValue(code);
  }
}

