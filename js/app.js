document.querySelectorAll('.accordion__question').forEach((item) => {
    item.addEventListener('click', (event) => {
        console.log('click!');
        var accCollapse = item.nextElementSibling;
        if (!item.classList.contains('open')) {
            console.log('toogle  accordion button')
            accCollapse.style.display = "block";
            let accHeight = accCollapse.clientHeight;
            console.log(accHeight);
            setTimeout(() => {
                //After x amount of time,Remove "collapsing" class and add "collapse open" class
                accCollapse.style.height = accHeight + "px";
                accCollapse.style.display = '';
            }, 1)
            accCollapse.classList = 'accordion__collapse  collapsing';
            setTimeout(() => {
                console.log('open accordion content')
                accCollapse.classList = 'accordion__collapse collapse  open'
            }, 300);
        }
        //Close accordion item
        else {
            accCollapse.classList = 'accordion__collapse collapsing';
            setTimeout(() => {
                accCollapse.style.height = '0px';
            }, 1)
            setTimeout(() => {
                console.log('close accordion content')
                accCollapse.classList = 'accordion__collapse collapse '
                accCollapse.style.height = '';
                accCollapse.style.border = 'none';
            }, 300)
        }
        item.classList.toggle('open');
    });
});