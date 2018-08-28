//Sets re-usable styles for the content of each section on the landing page.

import styled from "styled-components";

const ContentContainer = styled.div`
    background-color: rgba(119, 152, 187, .6);
    width: 85%;
    height: 75%
    border-radius: 10px;
    margin: 6rem auto 1rem auto;
    margin-top: 6rem;
    padding: .75rem;
    text-shadow: 0px 4px 3px rgba(0,0,0,0.4), 0px 8px 13px rgba(0,0,0,0.1), 0px 18px 23px rgba(0,0,0,0.1);
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.5);
    text-align: center;
    overflow: auto;

    & h1 {
        font-family: 'IM Fell English', serif;
        font-size: 3.5rem;
        margin: 0;
    }

    & h2 {
        text-align: center;
        font-size: 1.75rem;
        margin: 0;
    }

    & form {
        margin-top: 1.25rem;
    }


    @media (min-width: 790px) {
        width: 75%;

        & h1 {
            font-size: 5rem;
            margin: 2rem;
        }

        & h2 {
            font-size: 2.5rem;
            margin: 1rem;
        }
    }

    @media (min-width: 1080px) {
        & h1 {
            font-size: 6rem;
        }        
    }

`
export default ContentContainer;