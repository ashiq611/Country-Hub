import { Link } from "react-router-dom";


const Hero = () => {
    return (
      <div>
        <div className="hero container mx-auto flex justify-between items-center">
          <div className="left">
            <img
              src="https://blush.design/api/download?shareUri=7WUMlxyam&w=800&h=800&fm=png"
              alt="hero-cover"
            />
          </div>
          <div className="right">
            <h2>Countries = World </h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius
              velit recusandae architecto adipisci harum. Asperiores laboriosam
              eligendi repudiandae suscipit nobis quisquam error, quibusdam
              inventore dolores eveniet voluptatum quod quam ipsa.
            </p>
            <Link to="/countries"> Knows About Country </Link>
          </div>
        </div>
      </div>
    );
};

export default Hero;