import { styled } from "@mui/material/styles";
import { Typography, Box, Grid, Chip } from "@mui/material";

export const ExperienceSection = styled(Box)(({ theme }) => ({
  padding: `0 ${theme.spacing(10)}  ${theme.spacing(30)}  ${theme.spacing(10)}`,
  position: "relative",
}));

export const ExperienceHead = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.h4.fontSize,
  paddingBottom: theme.spacing(2),
  borderBottom: `1px solid ${theme.palette.divider}`,
  marginBottom: theme.spacing(3),
}));

export const Section = styled(Grid)(({ theme }) => ({
  marginBottom: theme.spacing(3),
}));

export const SectionHead = styled(Box)(({ theme }) => ({
  fontSize: theme.typography.h5.fontSize,
  fontWeight: "bold",
  textTransform: "capitalize",
}));

export const TopicLogo = styled("img")(({ theme }) => ({
  maxWidth: theme.spacing(20),
  maxHeight: theme.spacing(20),
  width: "100%",
  height: "100%",

  [theme.breakpoints.down("md")]: {
    margin: "0 auto",
  },
  [theme.breakpoints.up("md")]: {
    margin: "0",
  },
}));

export const TopicHead = styled(Box)(({ theme }) => ({
  fontSize: theme.typography.subtitle1.fontSize,
  fontWeight: "bold",
  textTransform: "capitalize",
}));

export const TopicDetail = styled(Box)(({ theme }) => ({
  fontSize: theme.typography.body1.fontSize,
}));

export const TopicDescription = styled(Box)(({ theme }) => ({
  fontSize: theme.typography.body2.fontSize,
}));

export const TopicDetailHighlight = styled(Box)(({ theme }) => ({
  fontSize: theme.typography.body1.fontSize,
  fontWeight: "bold",
}));

export const UnorderedList = styled("ul")(() => ({
  listStyleType: "circle",
}));

export const Technologies = styled(Box)(() => ({
  display: "block",
}));

export const Technology = styled(Chip)(({ theme }) => ({
  margin: theme.spacing(0.5),
}));
