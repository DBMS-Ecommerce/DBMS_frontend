import React from "react";
import GIRL from "../../assets/girl.svg";
import LoggedNavigationBar from "../../components/LoggedNavigationBar";
import CategoryList from "../../components/CategoryList";
import HomeItem from "../../components/HomeItem";
import { Card } from "@mui/material";
import Stack from "@mui/material/Stack";
import IMAGE from "../../assets/camera.svg";
// import { useNavigate } from "react-router-dom";

export default function Home() {
//   const navigate = useNavigate();
    return (
        <div>
            <LoggedNavigationBar/>
            <div style={{marginTop:46}}>
                <Stack direction='row'>
                <CategoryList/>
                    <div style={{margin:10}}>
                        <Card style={{backgroundColor:'#F4F4F4',}}>
                            <p style={{fontWeight:'bold',fontSize:20}}>New Arrivals</p>
                            <div style={{overflowY:'scroll',maxHeight:480}}>
                            <Stack direction='column'>
                            <Stack direction='row'>
                                <HomeItem
                                    image={IMAGE}
                                    description={"NEW Original Lenovo LP40 Camera"}
                                    price={'LKR 1,449.58'}
                                />
                                <HomeItem
                                    image={IMAGE}
                                    description={"Global Version Xiaomi Mi"}
                                    price={'LKR 1,449.58'}
                                />
                                <HomeItem
                                    image={IMAGE}
                                    description={"NEW Original Lenovo LP40 Camera"}
                                    price={'LKR 1,449.58'}
                                />
                                <HomeItem
                                    image={IMAGE}
                                    description={"NEW Original Lenovo LP40 Camera"}
                                    price={'LKR 1,449.58'}
                                />
                            </Stack>
                            <Stack direction='row'>
                                <HomeItem
                                    image={IMAGE}
                                    description={"NEW Original Lenovo LP40 Camera"}
                                    price={'LKR 1,449.58'}
                                />
                                <HomeItem
                                    image={IMAGE}
                                    description={"Global Version Xiaomi Mi"}
                                    price={'LKR 1,449.58'}
                                />
                                <HomeItem
                                    image={IMAGE}
                                    description={"NEW Original Lenovo LP40 Camera"}
                                    price={'LKR 1,449.58'}
                                />
                                <HomeItem
                                    image={IMAGE}
                                    description={"NEW Original Lenovo LP40 Camera"}
                                    price={'LKR 1,449.58'}
                                />
                            </Stack>
                            </Stack>
                            </div>
                        </Card>
                    </div>
                </Stack>
            </div>
        </div>
    );
}
