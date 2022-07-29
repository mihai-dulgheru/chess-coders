import React from 'react';

const UserProfile = () => {
  return (
    <div>
      <h1>Profil utilizator</h1>
      <div>
        <form>
          <label htmlFor="nume">Nume:</label>
          <input type="text" name="nume" id="nume" defaultValue={'User_1'} />
          <label htmlFor="email">Email:</label>
          <input type="text" name="email" id="email" defaultValue={'user1@gmail.com'} />
        </form>
      </div>
      <div>
        <button>
          <i className="fa-solid fa-lock"></i>
          Schimba parola
        </button>
        <button>
          <i className="fa-regular fa-envelope"></i>
          Schimba adresa de e-mail
        </button>
      </div>
    </div>
  );
};

export default UserProfile;
