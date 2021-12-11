import React from "react";
import { Typography, Row, Col, Statistic, Spin } from "antd";
import { Link } from "react-router-dom";
import { useGetCryptosQuery } from "../services/cryptoApi";
import millify from "millify";
import { Cryptocurrencies, News } from "../components";

const { Title } = Typography;

const Homepage = () => {
  const { data, isFetching } = useGetCryptosQuery(10);
  console.log(data);
  const globalStats = data?.data?.stats;

  if (isFetching) return <Spin />;

  return (
    <>
      <Title level={2} className="heading">
        Global Crypto Stats
      </Title>
      <Row gutter={[32, 32]}>
        <Col span={12}>
          <Statistic title="Total Cryptocurrencies" value={millify(globalStats.total)} />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total Exchanges"
            value={millify(globalStats.totalExchanges)}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total Market Cap"
            value={millify(globalStats.totalMarketCap)}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total 24h Volume"
            value={millify(globalStats.total24hVolume)}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total Markets"
            value={millify(globalStats.totalMarkets)}
          />
        </Col>
      </Row>
      <div className="home-heading-container">
        <Title level={2} className="home-title">
          Top 10 Cryptocurrencies In The World
        </Title>
        <Title level={3} className="show-more">
          <Link to="/cryptocurrencies">See More</Link>
        </Title>
      </div>
      <Cryptocurrencies simplified />
      <div className="home-heading-container">
        <Title level={2} className="home-title">
          Latest Cryptocurrency News
        </Title>
        <Title level={3} className="show-more">
          <Link to="/news">See More</Link>
        </Title>
      </div>
      <News/>
    </>
  );
};

export default Homepage;
