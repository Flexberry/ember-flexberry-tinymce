import Controller from '@ember/controller';

export default Controller.extend({

  /**
    Component options.

    @property сomponentOptions
  */
  сomponentOptions: undefined,

  /**
    Component value.

    @property value
  */
  value: undefined,

  /**
    Initializes controller.
  */
  init() {
    this._super(...arguments);
    this.set('сomponentOptions', {
      plugins: 'accordion advlist anchor autolink autoresize autosave charmap code codesample directionality fullscreen image importcss insertdatetime link lists media nonbreaking pagebreak preview quickbars save searchreplace table template visualblocks visualchars wordcount',
      toolbar: 'undo redo | formatpainter casechange blocks | bold italic backcolor | ' +
      'alignleft aligncenter alignright alignjustify | ' +
      'bullist numlist checklist outdent indent | removeformat | a11ycheck code codesample table insertdatetime ' +
      'fullscreen preview link unlink media mediaembed | selectall | searchreplace | blockquote | charmap emoticons'
    });

    this.set('value', 'Enter text for test component');
  },
});
