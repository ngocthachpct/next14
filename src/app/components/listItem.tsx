import { Divider, List, Typography } from "antd";
import React from "react";
import { IoStarSharp } from "react-icons/io5";
import { BsThreeDots } from "react-icons/bs";

const data1 = ["셀바스에이아이-당뇨도시락", "셀비스에이아이 당뇨 도시락_2"];

const data2 = ["셀바스에이아이-저염도시락", "셀비스에이아이뷰티핏"];

const ListItem: React.FC = () => (
  <>
    {/* <Divider >Default Size</Divider> */}
    <List
      header={
        <div style={{ display: "flex", alignItems: "flex-start" }}>
          즐겨찾기
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
          대상자 목록
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
