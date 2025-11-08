import { Puppy } from "@/types";

/*
export async function getPuppies() {
  try {
    const response = await fetch("http://devpups-api.test/api/puppies", {
      headers: {
        accept: "application/json",
      },
    });
    if (!response.ok) {
      const errorData = await response.json();
      throw errorData;
    }
    const { data } = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
}
*/

// export async function toggleLikedStatus(id: Puppy["id"]) {
//   try {
//     const response = await fetch(`http://devpups-api.test/api/puppies/${id}/like`, {
//       method: "PATCH",
//       headers: {
//         "Accept": "application/json",
//       },
//     });
//     if (!response.ok) {
//       const errorData = await response.json();
//       throw errorData;
//     }
//     const { data } = await response.json();
//     return data;
//   } catch (error) {
//     console.log(error);
//     throw error;
//   }
// }

// export async function createPuppy(formData: FormData) {
//   try {
//     const response = await fetch("http://devpups-api.test/api/puppies", {
//       method: "POST",
//       headers: {
//         "Accept": "application/json",
//       },
//       body: formData,
//     });
//     if (!response.ok) {
//       const errorData = await response.json();
//       throw errorData;
//     }
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.log(error);
//     throw error;
//   }
// }
