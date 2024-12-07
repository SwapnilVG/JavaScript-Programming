let books = [
    {
        title: 'The Great Gatsby',
        author:'F.Scott Fitzgerald',
        year: 1925,
    },
    
    {
        title:'To Kill a Mockingbird',
        author:'Harper Lee',
        year:1960,
    },
    
    {
        title:'Who are You?',
        author:'George Orwell',
        year:'1949',    
    },
    
    {
        title:'Pride And Prejudice',
        author:'Jane Austen',
        year:'1813',
    },
    
    ]
    
    let logTitles = (titles)=>{
        titles.sort();
        console.log(titles.join(", "));
    }
    
    let extractTitles = (books ,callback)=>{
        let titles = books.map((book)=>book.title)
        callback(titles)
    }
    
    extractTitles(books,logTitles)