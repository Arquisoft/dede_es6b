import {
    getSolidDataset,
    getThing,
    getStringNoLocale,
    getUrlAll,
    Thing,
    getUrl,
  } from "@inrupt/solid-client";

  import { FOAF, VCARD } from "@inrupt/vocab-common-rdf";
  export{};

async function getProfile(webId: string): Promise<Thing> {
  let profileDocumentURI = webId.split("#")[0];
  let myDataset = await getSolidDataset(profileDocumentURI); 
  return getThing(myDataset, webId) as Thing;
}

export async function getAddressesFromPod(webId: string) {
    let addressURLs = getUrlAll(await getProfile(webId), VCARD.hasAddress);
    let addresses: string[] = [];
  
    for (let addressURL of addressURLs) {
      let address = getStringNoLocale(
        await getProfile(addressURL),
        VCARD.street_address
      );
      let locality = getStringNoLocale(
        await getProfile(addressURL),
        VCARD.locality
      );
      let region = getStringNoLocale(await getProfile(addressURL), VCARD.region);
      let postal_code = getStringNoLocale(
        await getProfile(addressURL),
        VCARD.postal_code
      );
      let country = getStringNoLocale(
        await getProfile(addressURL),
        VCARD.country_name
      );
  
      if (address)
        addresses.push(`${address}, ${locality}, ${postal_code}, ${region}, ${country}`);
    }
  
        return addresses;
  }