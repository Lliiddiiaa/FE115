
    function tooltip() {
        let elements = document.querySelectorAll('.tooltip');
    
        [...elements].map(element => {
            element.addEventListener('mouseenter', function (e) {
                createTooltip(e)
            })
        })

        function createTooltip(e) {
            console.log(e.target)
    
            let elem = document.createElement('div');
            elem.setAttribute('class', 'tooltip-element');
            elem.textContent = e.target.title
    
            document.body.append(elem);
        }

        let elements = document.querySelectorAll('.tooltip');

        [...elements].map(element => {
            element.addEventListener('mouseout', function (e) {
                div.elem.remove(e);
            })
        })


        // let tooltips = document.querySelectorAll('.tooltip');

        // [...tooltips].map(elem=> {
        //     elem.addEventListener('mouseout', function (elem) {
        //         body.div.remove(e);
        //     })
        // })
    
    
        
    }
    
    tooltip()
    
    // let tooltipElem;

    // document.onmouseover = function(event) {
    //   let target = event.target;

    //   let tooltipHtml = target.dataset.tooltip;
    //   if (!tooltipHtml) return;


    //   tooltipElem = document.createElement('div');
    //   tooltipElem.className = 'tooltip';
    //   tooltipElem.innerHTML = tooltipHtml;
    //   document.body.append(tooltipElem);

    //   let coords = target.getBoundingClientRect();

    //   let left = coords.left + (target.offsetWidth - tooltipElem.offsetWidth) / 2;
    //   if (left < 0) left = 0; 

    //   let top = coords.top - tooltipElem.offsetHeight - 5;
    //   if (top < 0) {
    //     top = coords.top + target.offsetHeight + 5;
    //   }

    //   tooltipElem.style.left = left + 'px';
    //   tooltipElem.style.top = top + 'px';
    // };

    // document.onmouseout = function(e) {

    //   if (tooltipElem) {
    //     tooltipElem.remove();
    //     tooltipElem = null;
    //   }

    // };