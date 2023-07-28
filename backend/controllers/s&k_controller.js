import s_k from "../models/s&k_model.js";
import path from "path";
import fs from "fs";

// Get all cars profiles
export const getS_K = async (req, res) => {
    try {
        const response = await s_k.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ error: "Internal server error" });
    }
};

// Get a specific cars profile by id_s_k
export const getS_KById = async (req, res) => {
    try {
        const response = await s_k.findByPk(req.params.id_s_k);
        if (response) {
            res.status(200).json(response);
        } else {
            res.status(404).json({ error: "Cars profile not found" });
        }
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ error: "Internal server error" });
    }
};

// Create a new cars profile
export const createS_K = async (req, res) => {
    const { id_user } = req.body
    if (req.files === null) return res.status(400).json({ msg: "No File Uploaded" });
    const allowedType = [".png", ".jpg", ".jpeg"];

    try {
        // ktp
        const img_ktp = req.files.ktp;
        const file_sizeKtp = img_ktp.data.length;
        const ext_ktp = path.extname(img_ktp.name);
        const file_name_ktp = img_ktp.md5 + ext_ktp;
        const img_ktp_url = `${req.protocol}://${req.get("host")}/images/${file_name_ktp}`;
        if (!allowedType.includes(ext_ktp.toLowerCase()))
            return res.status(422).json({ msg: "Invalid Images" });
        if (file_sizeKtp > 5000000)
            return res.status(422).json({ msg: "Image must be less than 5 MB" });
        await img_ktp.mv(`./public/images/${file_name_ktp}`);
        
        // bpjs
        const img_bpjs = req.files.bpjs;
        const file_sizebpjs = img_bpjs.data.length;
        const ext_bpjs = path.extname(img_bpjs.name);
        const file_name_bpjs = img_bpjs.md5 + ext_bpjs;
        const img_bpjs_url = `${req.protocol}://${req.get("host")}/images/${file_name_bpjs}`;
        if (!allowedType.includes(ext_bpjs.toLowerCase()))
            return res.status(422).json({ msg: "Invalid Images" });
        if (file_sizebpjs > 5000000)
            return res.status(422).json({ msg: "Image must be less than 5 MB" });
        await img_bpjs.mv(`./public/images/${file_name_bpjs}`);
        
        // pasport
        const img_pasport = req.files.pasport;
        const file_sizepasport = img_pasport.data.length;
        const ext_pasport = path.extname(img_pasport.name);
        const file_name_pasport = img_pasport.md5 + ext_pasport;
        const img_pasport_url = `${req.protocol}://${req.get("host")}/images/${file_name_pasport}`;
        if (!allowedType.includes(ext_pasport.toLowerCase()))
            return res.status(422).json({ msg: "Invalid Images" });
        if (file_sizepasport > 5000000)
            return res.status(422).json({ msg: "Image must be less than 5 MB" });
        await img_pasport.mv(`./public/images/${file_name_pasport}`);
      
        // mwmp
        const img_mwmp = req.files.mwmp;
        const file_sizemwmp = img_mwmp.data.length;
        const ext_mwmp = path.extname(img_mwmp.name);
        const file_name_mwmp = img_mwmp.md5 + ext_mwmp;
        const img_mwmp_url = `${req.protocol}://${req.get("host")}/images/${file_name_mwmp}`;
        if (!allowedType.includes(ext_mwmp.toLowerCase()))
            return res.status(422).json({ msg: "Invalid Images" });
        if (file_sizemwmp > 5000000)
            return res.status(422).json({ msg: "Image must be less than 5 MB" });
        await img_mwmp.mv(`./public/images/${file_name_mwmp}`);
        
        await s_k.create({
            id_user: id_user,
            ktp: file_name_ktp,
            ktp_url: img_ktp_url,
            bpjs: file_name_bpjs,
            bpjs_url: img_bpjs_url,
            pasport: file_name_pasport,
            pasport_url: img_pasport_url,
            mwmp: file_name_mwmp,
            mwmp_url: img_mwmp_url,
        })
        res.status(201).json({ msg: "Images Created Successfully" });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ msg: "Internal Server Error" });
    }
}


  

// Delete a cars profile
export const deleteS_K = async (req, res) => {
    try {
        const profile = await s_k.findByPk(req.params.id_s_k);
        if (profile) {
            await profile.destroy();
            res.status(200).json({ msg: "Cars profile deleted" });
        } else {
            res.status(404).json({ error: "Cars profile not found" });
        }
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ error: "Internal server error" });
    }
};