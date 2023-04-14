import { useState } from "react";
import { useTranslation } from "react-i18next";
import { QRCodeSVG } from "qrcode.react";
import {
  Box,
  Input,
  Flex,
  InputGroup,
  InputLeftAddon,
  Spacer,
} from "@chakra-ui/react";

export const HomePage = () => {
  const [info, setInfo] = useState({
    PLANT: "",
    VENDER: "",
    "P/N": "",
    QTY: "",
    "D/C": "",
    "EXP DATE": "",
  });

  const [payload, setPayload] = useState({
    partNo: "",
    qty: "",
    unit: "",
    vendor: "",
    dc: "",
    tc: "01",
    po: "",
    invNo: "",
    serialNo: "",
  });

  const lableMap = {
    partNo: "Part No",
    qty: "Qty",
    unit: "Unit",
    vendor: "Vendor",
    dc: "D/C",
    tc: "T/C",
    po: "P/O",
    invNo: "Inv No",
    serialNo: "Serial No",
  };

  const seq = [
    "partNo",
    "qty",
    "unit",
    "vendor",
    "dc",
    "tc",
    "po",
    "invNo",
    "serialNo",
  ];

  const getQrcodeValue = () => {
    let arr: string[] = [];
    seq.forEach((key) => {
      arr.push(payload[key as keyof typeof payload]);
    });

    return arr.join(" {");
  };

  const onPayloadChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>,
    key: string
  ) => {
    setPayload((prev) => {
      const temp = { ...prev };
      temp[key as keyof typeof temp] = event.target.value;
      return temp;
    });
  };

  const onInfoChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>,
    key: string
  ) => {
    setInfo((prev) => {
      const temp = { ...prev };
      temp[key as keyof typeof temp] = event.target.value;
      return temp;
    });
  };

  return (
    <>
      <Flex mt={8} justifyContent={"center"} alignItems={"center"}>
        <Flex
          padding={6}
          width={400}
          justifyContent={"center"}
          alignItems={"center"}
          border={"1px solid black"}
        >
          <Box flex="1">
            <QRCodeSVG value={getQrcodeValue()} />
          </Box>
          <Box flex="1">
            <ul>
              {Object.keys(info).map((key: string) => {
                return (
                  <li key={key}>
                    {key}: {info[key as keyof typeof info]}
                  </li>
                );
              })}
            </ul>
          </Box>
        </Flex>
      </Flex>
      <Flex justifyContent={"center"} className="no-print">
        <Flex
          padding={2}
          margin={"0 auto"}
          width={400}
          mt={2}
          justifyContent={"center"}
          alignItems={"center"}
          flexDir={"column"}
        >
          {seq.map((key) => {
            return (
              <InputGroup key={key} mt={2}>
                <InputLeftAddon
                  children={lableMap[key as keyof typeof lableMap]}
                />
                <Input
                  type="text"
                  value={payload[key as keyof typeof payload]}
                  onChange={(event) => onPayloadChangeHandler(event, key)}
                />
              </InputGroup>
            );
          })}
        </Flex>
        <Flex
          padding={2}
          margin={"0 auto"}
          width={400}
          mt={2}
          justifyContent={"center"}
          alignItems={"center"}
          flexDir={"column"}
        >
          {Object.keys(info).map((key: string) => {
            return (
              <InputGroup key={key} mt={2}>
                <InputLeftAddon
                  children={key}
                />
                <Input
                  type="text"
                  value={payload[key as keyof typeof payload]}
                  onChange={(event) => onInfoChangeHandler(event, key)}
                />
              </InputGroup>
            );
          })}
        </Flex>
      </Flex>
    </>
  );
};
