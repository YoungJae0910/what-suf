import * as React from "react"
import Box from "@mui/material/Box"
import ImageList from "@mui/material/ImageList"
import ImageListItem from "@mui/material/ImageListItem"
import { ImageListItemBar } from "@mui/material"
import styled from "styled-components"

export default function StoreList() {
    return (
        <WarpDiv>
            <Box sx={{ width: 1980, height: 1000, overflowY: "scroll" }}>
                <ImageList variant="masonry" cols={5} gap={8}>
                    {itemData.map((item) => (
                        <ImageListItem key={item.img}>
                            <img
                                src={`${item.img}?w=248&fit=crop&auto=format`}
                                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                alt={item.title}
                                loading="lazy"
                            />
                        </ImageListItem>
                    ))}
                </ImageList>
            </Box>
        </WarpDiv>
    )
}

const itemData = [
    {
        img: "https://images.unsplash.com/photo-1514153706299-066ec6b89838?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        title: "Bed"
    },
    {
        img: "https://images.unsplash.com/photo-1547955973-d7c7a6ec4970?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        title: "Books"
    },
    {
        img: "https://images.unsplash.com/photo-1554235518-c4170f5deebd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        title: "Sink"
    },
    {
        img: "https://images.unsplash.com/photo-1523606772308-64a28db0ef2c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
        title: "Kitchen"
    },
    {
        img: "https://images.unsplash.com/photo-1559908890-6b0ee82a790b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1078&q=80",
        title: "Blinds"
    },
    {
        img: "https://images.unsplash.com/photo-1537513570588-fd1530db9e63?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        title: "Chairs"
    },
    {
        img: "https://images.unsplash.com/photo-1517699418036-fb5d179fef0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1334&q=80",
        title: "Laptop"
    },
    {
        img: "https://images.unsplash.com/photo-1455264745730-cb3b76250ae8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1144&q=80",
        title: "Doors"
    },
    {
        img: "https://images.unsplash.com/photo-1516633630673-67bbad747022?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        title: "Coffee"
    },
    {
        img: "https://images.unsplash.com/photo-1561074043-1b204dad0418?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
        title: "Storage"
    },
    {
        img: "https://images.unsplash.com/photo-1580331522941-58d0812c6d81?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        title: "Candle"
    },
    {
        img: "https://images.unsplash.com/photo-1621951289270-b942dc5f4320?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80",
        title: "Coffee table"
    },
    {
        img: "https://plus.unsplash.com/premium_photo-1674667007424-20cb3b1b76f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        title: "Candle"
    },
    {
        img: "https://images.unsplash.com/photo-1526342122811-2a9c8512023d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        title: "Candle"
    },
    {
        img: "https://images.unsplash.com/photo-1618495843164-db3fbdca57d4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
        title: "Candle"
    },
    {
        img: "https://images.unsplash.com/photo-1604839379219-6871b4d4a4a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80",
        title: "Candle"
    },
    {
        img: "https://images.unsplash.com/photo-1580068829493-ee627a9eaf3b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
        title: "Candle"
    },
    {
        img: "https://images.unsplash.com/photo-1528150177508-7cc0c36cda5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        title: "Candle"
    },
    {
        img: "https://images.unsplash.com/photo-1632334738554-95c79fb27eb7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80",
        title: "Candle"
    }
]

const WarpDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`
