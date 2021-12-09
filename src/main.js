let s =  dom.find('#siblings')[0]
dom.each(dom.children(s), (n)=> dom.style(n, 'color', 'red'))
