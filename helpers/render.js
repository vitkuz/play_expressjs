function renderRow(rows) {
    
    const result = rows.map(item => {
        return `
                <tr>
                    <td>${item._id}</td>
                    <td><a href="/item/${item._id}">${item.name}</a></td>
                    <td>${item.createdAt}</td>
                    <td>${item.updatedAt}</td>
                </tr>
                `
    });
    
    return result;
}

function renderTable(data) {
    
    return `
        <table>
            <thead>
                <th>id</th>
                <th>name</th>
                <th>created</th>
                <th>updated</th>
            </thead>
            <tbody>
                ${renderRow(data)}
            </tbody>
        </table>
        `
}


module.exports = (content) => {
    return `
    <html>
        <head>
            <title>
                Test title
            </title>
        </head>
        <body>
            Somew text
            ${ JSON.stringify(content) }
            ${ renderTable(content) }
        </body>
    </html>
    `
}