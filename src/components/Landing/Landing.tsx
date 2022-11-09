import React from 'react';
import { LandingContainer } from './Landing.styles';

const Landing: React.FC = () => {
  return (
    <LandingContainer>
      <div>
        <h1>All you need is love, and maybe a little music</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur
          quam optio suscipit neque! Exercitationem unde libero iure, vero
          maxime maiores aspernatur deserunt quidem numquam reprehenderit sunt
          totam porro corrupti quo? Quod reiciendis quidem ducimus officia. Sint
          beatae culpa ipsa natus quia similique a, excepturi vitae animi, optio
          deleniti dolores repellendus corrupti iste nostrum reiciendis minus,
          architecto eaque placeat aliquam accusamus?
        </p>
        <button>Register</button>
        <button>Singin</button>
      </div>
    </LandingContainer>
  );
};

export default Landing;
