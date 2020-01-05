// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require activestorage
//= require turbolinks
//= require jquery3
//= require bootstrap
//= require_tree .


$(document).ready(function(){
  $('.columnMatrix,.rowMatrix').on('change', function(){
    configuration = $(this).parents(".row")
    targetMatrix = "#matrix-" + configuration.data("matrix");
    var row_size = parseInt(configuration.children(".rowMatrix").val());
    var col_size = parseInt(configuration.children(".columnMatrix").val())
    $(targetMatrix + " tbody").html(makeMatrix(row_size, col_size, configuration.data("matrix")));
  });
  $('.columnMatrix').trigger('change');
});

function makeMatrix(number_of_rows, number_of_columns, matrix_type){
  resultHtml = ""
  for(var i = 0 ; i < number_of_rows ; i++) {
    columns = '';
    for(var j = 0 ; j < number_of_columns ; j++) {
      columns += "<td><input name="+matrix_type+"["+i+"][] type='number'></td>";
    }
    resultHtml += '<tr>' + columns + '</tr>';
  }  
  return resultHtml;
}
// 
$(function(){
  $('#matrix-form').on("ajax:success", function(data, status, xhr) {
    debugger
    $(this).next().empty();
    $.each(data.originalEvent.detail[0].matrix, function(index, obj) {
      $("#matrix-form").next().append(obj + '<br>');
    });
  });
});