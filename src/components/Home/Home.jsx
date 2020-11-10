import React from "react";
import { Card } from "antd";
import { Button } from "antd";
import "./Home.scss";
import "antd/dist/antd.css";

const Home = () => {
  return (
    <div className="home">
      <Card title="Welcome To Clalit">
        <Button type="primary" block>
          Doctor
        </Button>
        <Button type="primary" block>
          Patient
        </Button>
      </Card>
    </div>
  );
};

export default Home;
