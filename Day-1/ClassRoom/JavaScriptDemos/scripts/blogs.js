const getBlogs=(callbackdemo)=>{

    setTimeout(()=>{
        callbackdemo({
            title: 'welcome to my app'
        })
    },2000);

}


getBlogs((bp)=>{
    console.log(bp.title);
})

// const mydata = getBlogs()
// console.log(mydata.title);

