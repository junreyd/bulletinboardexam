$(function(){
console.log("connect");

var addbtn = document.getElementById('submitadd');

addbtn.addEventListener('click', function() {
    submitaddfunc();
}, false);

var editbtn = document.getElementById('submitupdate');

editbtn.addEventListener('click', function() {
    submiteditfunc();
}, false);

});


var articlelist = [];


function add() {
    $('.ui.modal.add').modal('show');
}


function submitaddfunc() {
    const title = $("#arttitle").val();
    const content = $("#artcontent").val();
    const date = new Date().toLocaleString();
    const id = uuidv4();

    var obj = {};
    obj['title'] = title;
    obj['content'] = content;
    obj['date'] = date;
    obj['id'] = id;

    articlelist.push(obj);

    $("#displayarticle > tbody:last-child").append(`
    <tr>
    <input type="hidden" id="item_id" value="${uuidv4()}">
    <td data-label="Name">${title}</td>
    <td data-label="Age">${content}</td>
    <td data-label="Job">${date}</td>
    <td>
        <button class="ui primary button" onclick="update(); return false;">
            Edit
          </button>
          <button class="ui button">
            Delete
          </button>
    </td>
  </tr>
`);

}


function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
}
  

function update() {
    $('.ui.modal.update').modal('show');

    const id = $("#id").val();
    console.log(id);

    // const title = $("#arttitle").val();
    // const content = $("#artcontent").val();
    // const date = new Date().toLocaleString();
}


function submiteditfunc() {
    
}
