import { isNone } from '@ember/utils';
import { scheduleOnce } from '@ember/runloop';
import Component from '@ember/component';
import layout from '../templates/components/flexberry-markdown-editor';

export default Component.extend({
  layout,

  readonly: false,

  classNames: ['flexberry-markdown-editor'],

  /**
   * Настройки компонента tinymce по умолчанию
   */
  defaultOptions: null,

  /**
   * Пользовательские настройки компонента tinymce
   */
  options: null,

  init() {
    this._super(...arguments);
    this.set('defaultOptions', Object.freeze({
      selector: `.flexberry-markdown-editor#${this.elementId} textarea`,
      branding: false,
      menubar: false,
      statusbar: false,
      height: 200,
      language: 'ru',
      readonly: this.get('readonly'),
      formats: {
        bold: { inline: 'span', classes: 'bold' },
        italic: { inline: 'span', classes: 'italic' },
        underline: { inline: 'span', classes: 'underline' },
      },
      content_style:
        '.bold { font-weight: bold; } ' +
        '.italic { font-style: italic; } ' +
        '.underline { text-decoration: underline; } ',
      setup: (editor) => {
        editor.on('change keyup setcontent', () => {
          this.set('value', editor.getContent());
        });
      }
    }));
  },

  didInsertElement() {
    this._super(...arguments);
    scheduleOnce('afterRender', this, this.initEditor);
  },

  initEditor() {
    const customOptions = isNone(this.get('options')) ? {} : this.get('options');
    const defaultOptions = this.get('defaultOptions') || {};
    const options = Object.assign({}, defaultOptions, customOptions);

    window.tinymce.init(options);
  }
});
