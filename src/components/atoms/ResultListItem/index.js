import styled from 'styled-components'

const ResultListItem = styled.li`
    background-color: ${({ theme }) => `${theme.colors.primary}90`};
    border: solid 1px ${({ theme }) => `${theme.colors.primary}40`};
    margin: 2px 0px;
    padding: 2px 10px;

    &[data-result="true"] {
        background-color: ${({ theme }) => `${theme.colors.success}90`};
    }
    &[data-result="false"] {
        background-color: ${({ theme }) => `${theme.colors.wrong}90`};
    }
    &[data-local-player="true"] {
        background-color: ${({ theme }) => `${theme.colors.success}90`};
    }
`

export default ResultListItem
