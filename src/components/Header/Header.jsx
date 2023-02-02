import React, { useEffect, useState } from "react"
import styled from "styled-components"
import hahahoho from "../../image/hahahoho.png"

export default function Header() {
    const [ScrollY, setScrollY] = useState(0) // window 의 pageYOffset값을 저장
    const [ScrollActive, setScrollActive] = useState(false)
    function handleScroll() {
        if (ScrollY > 900) {
            setScrollY(window.pageYOffset)
            setScrollActive(true)
        } else {
            setScrollY(window.pageYOffset)
            setScrollActive(false)
        }
    }
    useEffect(() => {
        function scrollListener() {
            window.addEventListener("scroll", handleScroll)
        } //  window 에서 스크롤을 감시 시작
        scrollListener() // window 에서 스크롤을 감시
        return () => {
            window.removeEventListener("scroll", handleScroll)
        } //  window 에서 스크롤을 감시를 종료
    })

    return (
        <>
            {ScrollActive ? (
                <WrapDiv>
                    <MainLogo src={hahahoho} alt="" />
                    <div>
                        <HeaderBtn>SignUp</HeaderBtn>
                        <HeaderBtn>Login</HeaderBtn>
                    </div>
                </WrapDiv>
            ) : null}
        </>
    )
}

const WrapDiv = styled.div`
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0.1px;
    z-index: 10;
    background-color: rgba(255, 255, 255, 0.7);
`
const MainLogo = styled.img`
    width: 150px;
    margin-left: 20px;
`
const HeaderBtn = styled.button`
    width: 80px;
    height: 30px;
    margin-right: 20px;
    background-color: #21176a;
    color: white;
    font-weight: bold;
    border: none;
    border-radius: 5px;
    cursor: pointer;
`
