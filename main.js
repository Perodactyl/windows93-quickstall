function openWin(path){
	return new Promise((resolve)=>{
		$file.open(path,(cont)=>{
			resolve($window({
				title:"Quickstall",
				html:cont
			}))
		})
    })
}
function openFile(path){
	return new Promise((resolve)=>{
    	$file.open(path,(cont)=>{
        	resolve(cont.toString())
        })
    })
}
(async function(){
	var win = await openWin("/a/quickstall/main.html")
    win.el.body.classList.add("quickstall-window")
    win.changeTitle("Quickstall Hub")
    window.quickstallImport = async ()=>{
    	win.changeTitle("Quickstall Import")
        win.el.body.innerHTML = await openFile("/a/quickstall/import.html")
    }
})()