import { Divider, List, Typography } from "antd";
import React from "react";
import { IoStarSharp } from "react-icons/io5";
import { BsThreeDots } from "react-icons/bs";

const data1 = ["당뇨병 환자를 위한 도시락.", "당뇨병 환자를 위한 도시락."];

const data2 = ["당뇨병 환자를 위한 도시락.", "당뇨병 환자를 위한 도시락."];

const ListItem: React.FC = () => (
  <>
    {/* <Divider >Default Size</Divider> */}
    <List
      header={
        <div style={{ display: "flex", alignItems: "flex-start" }}>
          가장 좋아하는
        </div>
      }
      dataSource={data1}
      renderItem={(item) => (
        <List.Item
          style={{
            textAlign: "left",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div>
            
              <IoStarSharp />
            {" "}
            {item}
          </div>
          <BsThreeDots />
        </List.Item>
      )}
    />
    <Divider orientation="left"></Divider>
    <List
      header={
        <div style={{ display: "flex", alignItems: "flex-start" }}>
          대상 목록
        </div>
      }
      dataSource={data2}
      renderItem={(item) => (
        <List.Item
          style={{
            textAlign: "left",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div>
            <Typography.Text mark></Typography.Text> {item}
          </div>
          <BsThreeDots />
        </List.Item>
      )}
    />
  </>
);

export default ListItem;
