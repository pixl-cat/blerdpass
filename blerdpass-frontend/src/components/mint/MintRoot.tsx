import {Button, CircularProgress, Fab, Stack, Typography} from "@mui/material";
import {useAddress, useWeb3Context} from "../../web3/web3-context";
import {useAppSelector} from "../../hooks/hooks";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import {useDispatch} from "react-redux";
import { mint, mintAmountMinus, mintAmountPlus} from "../../store/app-slice";
import {Web3Params} from "../../store/utils/params";
import {Custom} from "../../styles/Theme";


function MintRoot() {
    const dispatch = useDispatch();

    const {provider, chainID} = useWeb3Context();
    const address = useAddress();

    const app = useAppSelector((state) => state.app)


    async function mintPlus() {
        await dispatch(mintAmountPlus())
    }

    async function mintMinus() {
        await dispatch(mintAmountMinus())
    }

    async function mintSale() {
        let p: Web3Params = {
            networkID: chainID, provider: provider, address: address
        }
        await dispatch(mint(p))
    }

    if (app.loading) {
        return (
            <CircularProgress/>
        )
    }

    return (
        <Stack alignItems="center" spacing={3}>
            <Typography variant={"h5"} color={"#fff"} width={"70vw"} textAlign={"center"}>
                Welcome to BlerdPass Mint Central, each wallet is eligible to mint 1 BlerdPass Token. Mint price are free + gas fee.
            </Typography>
            <Typography variant={"h3"} color={"#fff"}>{app.currentMinted} /
                2222 MINTED</Typography>
            <Stack direction={"row"} spacing={2} alignItems="center">
                <Fab size="small" aria-label="remove" onClick={mintMinus}
                     sx={{backgroundColor: "#ed1f24", "&:hover": {
                             backgroundColor: "#a2181c",
                         }}}>
                    <RemoveIcon htmlColor={"#fff"}/>
                </Fab>

                <Typography variant={"h3"} color={"white"}>{app.mintAmount}</Typography>

                <Fab size="small" aria-label="add" onClick={mintPlus} sx={{backgroundColor: "#ed1f24", "&:hover": {
                        backgroundColor: "#a2181c",
                    }}}>
                    <AddIcon htmlColor={"#fff"}/>
                </Fab>
            </Stack>

            <Stack direction={"row"} spacing={2}>
                <Button variant="contained" onClick={mintSale} color={"primary"}
                        sx={{
                            borderRadius: 1,
                            borderColor: "#000",
                            height: 40,
                            border: "solid",
                            boxShadow: "-4px 4px 0px white",
                        }}>
                    <Typography color={"#fff"}>
                        Mint for {app.mintTotalPrice.toFixed(2)} ETH
                    </Typography>
                </Button>
            </Stack>
        </Stack>
    )

}

export default MintRoot
