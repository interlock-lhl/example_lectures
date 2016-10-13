$(function() {
  $('[data-2-method=delete]').on('click', function(e) {
    var form = $('<form>').attr('method', 'post').attr('action',$(this).attr('href'));
    $('<input>').attr('type','hidden').attr('name','_method').attr('value','delete').appendTo(form);
    // $('body').append(form);
    form.submit();
    console.log(this);
    return false;
  });
});
