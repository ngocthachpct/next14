import { Divider, List, Typography } from "antd";
import React from "react";
import { IoStarSharp } from "react-icons/io5";
import { BsThreeDots } from "react-icons/bs";

const data1 = ["셀바스에이아이-당뇨도시락", "셀비스에이아이 당뇨 도시락_2"];

const data2 = ["셀바스에이아이-저염도시락", "셀비스에이아이뷰티핏"];

const ListItem: React.FC = () => (
  <>
    {/* <Divider >Default Size</Divider> */}
    <List style={{ backgroundColor: "#EEEEEE" }}
      header={
        <div style={{ display: "flex", alignItems: "flex-start", marginLeft: '2vw' }}>
          즐겨찾기
        </div>
      }
      dataSource={data1}
      renderItem={(item) => (
        <List.Item
          style={{
            textAlign: "left",
            paddingLeft: "1vw",
            paddingRight: "1vw",
            marginLeft: "0.5vw",
            marginRight: "0.5vw",
            marginTop: "0.5vh",
            border: "1px solid #EEEEEE",
            borderRadius: "5px",
            display: "flex",
            justifyContent: "space-between",
            backgroundColor: "white",
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
    <List
      style={{ backgroundColor: "#EEEEEE", height: '120vh'}}
      header={
        <div style={{ display: "flex", alignItems: "flex-start", marginLeft: '2vw' }}>
          대상자 목록
        </div>
      }
      dataSource={data2}
      renderItem={(item) => (
        <List.Item
          style={{
            textAlign: "left",
            paddingLeft: "1vw",
            paddingRight: "1vw",
            marginLeft: "0.5vw",
            marginRight: "0.5vw",
            marginTop: "0.5vh",
            marginBottom: "0.5vh",
            backgroundColor: "white",
            border: "1px solid #EEEEEE",
            borderRadius: "5px",
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
