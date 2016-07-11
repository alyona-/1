
document.querySelector('body').addEventListener('change', function(event) {
    var target = event.target;
    var event_2 = event;
    do {
        var i=false;
        var classList = target.classList.toString();
        classList=classList.split(' ');
        for(var i in classList){
            if(classList[i] == 'icon_input') {i=true;
                var number_span =target.parentNode.nextSibling.innerText -1; //номер спана, для определения элемента
                break;}
        }
        if(i==true) break;
        target=target.parentNode;
    }while(target.tagName == 'BODY');
    event.returnValue = false;

    handleFileSelect(event_2, number_span);
});

function handleFileSelect(evt, number_span) {
    var files = evt.target.files; // FileList object
    var test = document.querySelectorAll('.icon_label');
    if (!files[0].type.match('image.*')) {
        exit();
    }

    var reader = new FileReader();
    reader.onload = (function(theFile) {
        return function(e) {
            test[number_span].style.backgroundImage = 'url('+ e.target.result+')';
        };
    })(files[0]);
    reader.readAsDataURL(files[0]);

}
