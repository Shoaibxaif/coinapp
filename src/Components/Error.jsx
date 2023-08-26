import { Container, Heading ,Text } from "@chakra-ui/react";
import React from "react";

const Error = () => {
  return (
    <Container maxW={"container.xl"}>
      <section className="page_404">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 ">
              <div className="col-sm-10 col-sm-offset-1  text-center">
                <div className="four_zero_four_bg">
                  <Heading textAlign={"center"}>ERROR 404</Heading>
                </div>

                <Text textAlign={'center'}>
               
                    <h3 className="h2">Look like you're lost</h3>

                    <p>the page you are looking for not avaible!</p>

                    <a href="/" className="link_404">
                      Go to Home
                    </a>
                 
                </Text>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default Error;
