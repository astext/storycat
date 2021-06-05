import { Injectable } from '@angular/core';

export interface Stories {
  title: string;
  filename: string;
  dateorigin: string;
  shortname: string;
  byline: string;
  keywords: string;
  catalog: string;
  subcatalog: string;
}


@Injectable({
  providedIn: 'root'
})
export class StorycatService {
  //stories: Stories[];


  stories: Stories[] = [
    {
      title: "The Buildings and Birds Inspector",
      filename: "buildingsbirds-tales-medium-future.txt",
      dateorigin: "April 2021",
      shortname: "Buildings & Birds",
      byline: "A Tale of the Medium Future",
      keywords: "High rise rooftops, birds, shelter, inspection, conflict",
      catalog: "MediumFuture",
      subcatalog: "short"

    },
    {
      title: "title of the story 2",
      filename: "the filename of the story",
      dateorigin: "",
      shortname: "short name",
      byline: "the byline, if any",
      keywords: "key words to tag the story",
      catalog: "the catalog, if any",
      subcatalog: "sub catalog, if any"

    },
    {
      title: "title of the story 3",
      filename: "the filename of the story",
      dateorigin: "",
      shortname: "short name",
      byline: "the byline, if any",
      keywords: "key words to tag the story",
      catalog: "",
      subcatalog: ""

    },
    {
      title: "title of the story 4",
      filename: "the filename of the story",
      dateorigin: "",
      shortname: "short name",
      byline: "the byline, if any",
      keywords: "key words to tag the story",
      catalog: "the catalog, if any",
      subcatalog: "sub catalog, if any"

    }






  ];






  constructor() { }
}
