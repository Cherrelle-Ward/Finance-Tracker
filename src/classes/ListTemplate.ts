import { HasFormatter } from "../interfaces/HasFormatter";

export class ListTemplate {
  constructor(private container: HTMLUListElement) {}

  render(item: HasFormatter, heading: string, position: "start" | "end") {
    const li = document.createElement("li");
    const h4 = document.createElement("h4");
    h4.innerText = heading;
    li.append(h4);

    const p = document.createElement("p");
    p.innerText = item.format(); //had to add the .format as hasFormatter requires it.
    li.append(p);

    if (position === "start") {
      //prepend - put at the start of tag
      this.container.prepend(li);
    } else {
      this.container.append(li);
    }
  }
}
