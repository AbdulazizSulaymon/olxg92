import styled from 'styled-components';
const WindowWrapper = styled.div`
    .window{
        background-color: #efefef;

        .title{
            font-size: 28px;
            font-weight: bold;
            margin-bottom: 20px;
        }
        
        .MuiList-root{
            max-height: 400px;
            overflow-y: auto;
            margin-bottom: 20px;
            padding: 10px;

            /* width */
            &::-webkit-scrollbar {
                width: 6px;
            }

            /* Track */
            &::-webkit-scrollbar-track {
                box-shadow: inset 0 0 5px white; 
                border-radius: 10px;
            }
            
            /* Handle */
            &::-webkit-scrollbar-thumb {
                background: #aaa; 
                border-radius: 10px;
            }

            /* Handle on hover */
            &::-webkit-scrollbar-thumb:hover {
                background: #777; 
            }
        }

        .MuiFormControl-root{
            flex: 1;
            margin-right: 10px;
        }
    }
    
`;

export default WindowWrapper;