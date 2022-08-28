import React from 'react';

const animalList = (animals) => {
  console.log(animals);

  if (!animals.length) {
    return <h3>No Animals Yet</h3>;
  }

  else {
    return (
    <div>
      <h3>Title</h3>
      {animals &&
        animals.map(animal => (
          <div key={animal._id} className="card mb-3">
            <p className="card-header">
              {animal.username}
              animal on {animal.createdAt}
            </p>
            <div className="card-body">
            </div>
          </div>
        ))}
    </div>
  );
}};

export default animalList;