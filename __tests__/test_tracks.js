import * as nock from "nock";
import * as path from "path";

import client from "./client";

describe("Tracks", () => {
  describe("video", () => {
    it("should return a JSON track.", async () => {
      nock("https://api.fulcrumapp.com")
        .get("/api/v2/videos/ccf931bd-4e0f-4562-8c00-3a57f8a62589/track.json")
        .replyWithFile(200, path.join(__dirname, "objects/video_track.json"), { "Content-Type": "application/json" });

      const track = await client.videos.track("ccf931bd-4e0f-4562-8c00-3a57f8a62589");
      expect(track[0].track[0][0]).toBe(1508959069103);
    });

    it("should return a GeoJSON track.", async () => {
      nock("https://api.fulcrumapp.com")
        .get("/api/v2/videos/ccf931bd-4e0f-4562-8c00-3a57f8a62589/track.geojson")
        .replyWithFile(200, path.join(__dirname, "objects/video_track.geojson"), {
          "Content-Type": "application/json",
        });

      const geojson = await client.videos.track("ccf931bd-4e0f-4562-8c00-3a57f8a62589", "geojson");
      expect(geojson.type).toBe("FeatureCollection");
      expect(geojson.features[0].properties.id).toBe("ccf931bd-4e0f-4562-8c00-3a57f8a62589");
    });
  });

  describe("audio", () => {
    it("should return a GPX track.", async () => {
      nock("https://api.fulcrumapp.com")
        .get("/api/v2/audio/ddcb934e-54d5-4476-acf5-750e32f4863f/track.gpx")
        .replyWithFile(200, path.join(__dirname, "objects/audio_track.gpx"), { "Content-Type": "application/gpx+xml" });

      const gpx = await client.audio.track("ddcb934e-54d5-4476-acf5-750e32f4863f", "gpx");
      expect(gpx.includes("<name>ddcb934e-54d5-4476-acf5-750e32f4863f</name>")).toBe(true);
    });

    it("should return a KML track.", async () => {
      nock("https://api.fulcrumapp.com")
        .get("/api/v2/audio/ddcb934e-54d5-4476-acf5-750e32f4863f/track.kml")
        .replyWithFile(200, path.join(__dirname, "objects/audio_track.kml"), {
          "Content-Type": "application/vnd.google-earth.kml+xml",
        });

      const kml = await client.audio.track("ddcb934e-54d5-4476-acf5-750e32f4863f", "kml");
      expect(kml.includes('<Data name="Date"><value>2015-04-28T16:02:44Z</value></Data>')).toBe(true);
    });
  });
});
