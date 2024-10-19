import PrintDetailsComponent from "./PrintDetails";
import { WithFlag as withFlag } from "./WithFlag";
import { WithLang as withLang } from "./WithLang";

export default withFlag(withLang(PrintDetailsComponent));
