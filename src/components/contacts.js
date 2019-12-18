import React from 'react'


    const Contacts = ({ contacts }) => {
      return (
        <div>
          <center><h1>Contact List</h1></center>
          {contacts.map((contact) => (
            <div class="card">
              <div class="card-body">
                   <h5 class="card-title">Nombre: {contact.name}</h5>
                <h6 class="card-subtitle mb-2 text-muted">Email: {contact.email}</h6>
                <h6 class="card-subtitle mb-2 text-muted">Telefono: {contact.phone}</h6>
                <h6 class="card-subtitle mb-2 text-muted">Sitio Web: {contact.website}</h6>
                <p class="card-text">Empresa: {contact.company.catchPhrase}</p>
              </div>
            </div>
          ))}
        </div>
      )
    };

    export default Contacts
