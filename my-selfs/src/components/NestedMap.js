import React from 'react';

const NestedMap = () => {
    const users = [
        {
            fullName: 'Akram Khan',
            age: 23,
            phones:[{home:531923938},{office:2791370134}]
        },
        {
            fullName: 'Hanan Gazi',
            age: 45,
            phones:[{home:245453938},{office:645370134}]
        },
        {
            fullName: 'Kamal Shak',
            age: 33,
            phones:[{home:3622343938},{office:9761370134}]
        },
    ];
  return (
    <>
        {
            users.map((user,index)=>
                <section key={index} className="card">
                    <h1>Full Name : {user.fullName}</h1>
                    <h3>Age : {user.age}</h3>
                    {/* <p>Home: {user.phones[0].home}</p>
                    <p>Office : {user.phones[1].office}</p> */}
                    <ul>
                        {user.phones.map((num,index)=>
                           <>
                           <li>Home : {num.home}</li>
                           <li>Office : {num.office}</li>
                           </>
                        )}
                    </ul>
               
                </section>
            )
        }
    </>
  )
}

export default NestedMap