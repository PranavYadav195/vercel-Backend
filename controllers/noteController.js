import Note from "../models/Note.js";

// CREATE
export const createNote = async (req, res) => {
  const note = await Note.create(req.body);
  res.status(201).json(note);
};

// READ
export const getNotes = async (req, res) => {
  const notes = await Note.find();
  res.json(notes);
};

// UPDATE
export const updateNote = async (req, res) => {
  const note = await Note.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(note);
};

// DELETE
export const deleteNote = async (req, res) => {
  await Note.findByIdAndDelete(req.params.id);
  res.json({ message: "Note deleted" });
};
