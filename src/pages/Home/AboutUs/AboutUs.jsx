import React from "react";
import Container from "../../../components/Shared/Container/Container";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <section className="p-5">
      <Container>
        <div className="md:flex gap-10 space-y-14 md:space-y-0 justify-center items-center">
          <div className="mx-auto relative">
            <img
              className="rounded-md animate-bounce-slow"
              src="https://raw.githubusercontent.com/uiaextend/jeduplan/main/header/header-img.png"
              alt="About image"
            />
            <img
              className="hidden md:block absolute top-0 -right-10 animate-bounce-side"
              src="https://raw.githubusercontent.com/uiaextend/jeduplan/main/header/plane.png"
              alt=""
            />
          </div>
          <div className="max-w-[650px]">
            <p className="uppercase text-primary font-medium underline underline-offset-4 decoration-4 mb-5">
              about us
            </p>
            <h2 className="font-Poppins text-4xl font-bold">
              Bringing the world together through knowledge
            </h2>
            <p className="font-Poppins font-light text-gray-400 my-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              aliquid incidunt consequatur ipsam reprehenderit minima inventore
              aperiam explicabo quaerat animi accusantium, deleniti eum!
              Eligendi adipisci quia id ullam dolor ab consequatur! Repudiandae
              veniam enim fugiat necessitatibus earum assumenda, cum autem
              veritatis eos tenetur saepe fugit dignissimos quo illum nihil
              nobis a, eaque soluta unde officia provident ipsa reprehenderit.
              Sequi adipisci et blanditiis unde est molestias, fuga ea quis
              dicta, laborum temporibus minima assumenda vel officia aliquid?
              Recusandae corrupti nulla unde autem, deserunt ipsa perferendis
              modi tempore aliquam, eligendi beatae architecto? Sint, amet nemo
              eveniet aperiam quia accusamus dolorem iusto ex.
            </p>
            <p className="font-Poppins font-light text-gray-400 mb-7">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum quidem reprehenderit soluta aperiam doloremque veniam,
              fuga blanditiis officiis quasi eveniet quisquam. Nemo soluta
              explicabo aperiam nihil veniam quis. Consectetur explicabo,
              accusantium impedit nam vero, temporibus mollitia quaerat nesciunt
              tempore, deleniti asperiores assumenda! Soluta accusantium impedit
              magnam tempore nostrum eaque cumque, nobis laudantium assumenda
              molestiae fugiat ad nam consequatur deserunt eligendi libero sint
              ratione. Ipsum sapiente obcaecati accusamus facilis quia placeat!
            </p>
            <Link>
              <button className="border-2 border-primary px-6 py-3 font-semibold hover:bg-primary hover:text-white hover:outline-2 hover:-outline-offset-8 outline-white outline rounded-md duration-300 hover:rounded-none">
                Learn More
              </button>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutUs;
